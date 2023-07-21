import React, {useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {colors, size} from '../../utilities';

const styles = StyleSheet.create({
  tabStyle: {
    flexDirection: 'row',
    height: 18,
    backgroundColor: colors.blue,
    width: '100%',
  },
  text: {
    fontSize: size.normal,
    color: colors.white,
  },
  singleTab: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  framContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.p2,
    padding: 15,
    alignSelf: 'flex-end',
    borderRadius: 4,
    marginHorizontal: 5,
    marginBottom: 2,
  },
  frameIconStyle: {
    width: 3,
    height: 3,
  },
  framTextStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    marginHorizontal: 2,
  },
  polygonStyle: {
    width: 25,
    height: 25,
  },
});

function MarketTabBar({state, descriptors, navigation}) {
  const scrollviewRef = useRef(null);

  return (
    <View style={styles.tabStyle}>
      <ScrollView
        ref={scrollviewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (isFocused) {
            return (
              <View
                key={`tab-${label}`}
                testID={options.tabBarTestID}
                style={[styles.singleTab]}
                onLayout={event => {
                  const {layout} = event.nativeEvent;
                  scrollviewRef.current.scrollTo({
                    x: layout.x,
                    y: 0,
                    animated: false,
                  });
                }}
              >
                <Animated.Text style={[styles.text, {color: colors.p2}]}>
                  {label}
                </Animated.Text>
              </View>
            );
          }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.singleTab]}
              onLongPress={onLongPress}
            >
              <Animated.Text numberOfLines={1} style={[styles.text]}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

MarketTabBar.propTypes = {
  state: PropTypes.shape({
    routes: PropTypes.array,
    index: PropTypes.number,
  }),
  descriptors: PropTypes.object,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    emit: PropTypes.func,
  }),
};

export {MarketTabBar};

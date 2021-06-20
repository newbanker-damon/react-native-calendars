import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default function ZOCalendar() {
  const renderCalendarWithCustomHeader = () => {
    const CustomHeader = React.forwardRef((props, ref) => {
      return (
        <View
          ref={ref}
          {...props}
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderBottomWidth: 1
          }}
        >
          <Text>2021-04-29</Text>
          <Text>待跟进 12/20</Text>
        </View>
      );
    });

    return (
      <Fragment>
        <Text style={styles.text}>中欧日历</Text>
        <Calendar
          //testID={testIDs.calendars.LAST}
          style={[
            styles.calendar,
            {
              height: 250,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey'
            }
          ]}
          markingType={'custom'}
          markedDates={{
            '2021-04-30': {
              customStyles: {
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                },
                container: {
                  backgroundColor: '#007EE6'
                }
              }
            }
          }}
          customHeader={CustomHeader}
        />
      </Fragment>
    );
  };

  return <View>{renderCalendarWithCustomHeader()}</View>;
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});

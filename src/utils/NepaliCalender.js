import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const NepaliCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [todayNepaliDate, setTodayNepaliDate] = useState(null);

  useEffect(() => {
    getTodayNepaliDate();
  }, []);

  const getTodayNepaliDate = () => {
    // This is a placeholder function; replace it with actual Nepali date logic
    const todayNepali = '2080-11-23'; // Placeholder date
    setTodayNepaliDate(todayNepali);
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 100 === 0);
  };

  const getDaysInMonth = (year, month) => {
    const daysInMonth = [0, 31, 32, 31, 32, 31, 32, 30, 30, 30, 30, 30, 29];
    return daysInMonth[month] + (month === 12 && isLeapYear(year) ? 1 : 0);
  };

  const generateMarkedDates = () => {
    const markedDates = {};
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    for (let year = currentYear; year <= currentYear + 1; year++) {
      for (let month = 1; month <= 12; month++) {
        const daysInMonth = getDaysInMonth(year, month);
        for (let day = 1; day <= daysInMonth; day++) {
          const nepaliDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
          markedDates[nepaliDate] = { marked: true };
        }
      }
    }

    return markedDates;
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    // You can add your logic here for handling the selected Nepali date
    Alert.alert('Selected Nepali Date', `You selected: ${day.dateString}`);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{ ...generateMarkedDates(), [selectedDate]: { selected: true } }}
        theme={{
          textDayFontFamily: 'Arial',
          textMonthFontFamily: 'Arial',
          textDayHeaderFontFamily: 'Arial',
        }}
      />
      <View style={styles.todayContainer}>
        <Text style={styles.todayText}>{`Today's Nepali Date: ${todayNepaliDate}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  todayContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  todayText: {
    fontSize: 18,
  },
});

export default NepaliCalendar;

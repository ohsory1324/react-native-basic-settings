import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ScreenBase from '../components/ScreenBase';

const Screen1 = ({ test }) => (
  <ScreenBase>
    <View>
      <Text>{test}</Text>
      <Text>Screen1</Text>
    </View>
  </ScreenBase>
);

const mapStateToProps = state => ({
  test: state.main.test,
});

export default connect(mapStateToProps)(Screen1);

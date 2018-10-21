import styled from 'styled-components/native';
import { Constants } from 'expo';

import { fullScreen } from '../lib/styleds';

export default styled.SafeAreaView`
  padding-top: ${Constants.statusBarHeight};
  ${fullScreen}
`;

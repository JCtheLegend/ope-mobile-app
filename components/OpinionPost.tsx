import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from './ThemedView';

export function OpinionPost() {
    const opinionText = ['This is my OPINION', '']
    const opinionEmoji = ['🔥', '🥶', '💯']
  return (
    <ThemedView style={styles.opinionPost}>
        <ThemedText style={styles.text}>{opinionEmoji}</ThemedText>   
        <ThemedText style={styles.text}>{opinionText}</ThemedText>
    </ThemedView>  
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
  opinionPost: {
    flex: 1,
    flexDirection: 'row'
  }
});
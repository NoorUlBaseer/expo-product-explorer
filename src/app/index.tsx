import * as Device from 'expo-device';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

type Product = {
  id: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: 59.99 },
  { id: '2', name: 'Smart Watch', price: 89.99 },
  { id: '3', name: 'Bluetooth Speaker', price: 39.99 },
  { id: '4', name: 'USB-C Hub', price: 24.99 },
  { id: '5', name: 'Laptop Stand', price: 34.99 },
];

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title} numberOfLines={1}>
            Noor Ul Baseer
          </ThemedText>
          <ThemedText type="subtitle" style={styles.rollNumber}>
            22I-2405
          </ThemedText>
        </ThemedView>
        <FlatList
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.productRow}>
              <ThemedText style={styles.productName}>{item.name}</ThemedText>
              <ThemedText style={styles.productPrice}>${item.price.toFixed(2)}</ThemedText>
            </ThemedView>
          )}
          contentContainerStyle={styles.productList}
          style={styles.list}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'stretch',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  header: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  productList: {
    gap: Spacing.three,
    paddingBottom: Spacing.four,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.four,
    borderRadius: Spacing.three,
    minHeight: 88,
  },
  productName: {
    flex: 1,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
  },
  productPrice: {
    flexShrink: 0,
    marginLeft: Spacing.two,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    lineHeight: 42,
  },
  rollNumber: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 32,
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});

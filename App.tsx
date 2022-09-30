/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {ImageProps, StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Web3 from 'web3';

const HeartIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="heart" />;

export const App = () => {
  const [web3] = useState<Web3>(new Web3());
  const [provider] = useState(
    new Web3.providers.HttpProvider('http//127.0.0.1:7545'),
  );
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          <Text style={styles.text} category="h1">
            Welcome to UI Kitten 😻
          </Text>
          <Text style={styles.text} category="s1">
            Start with editing App.js to configure your App
          </Text>
          <Text style={styles.text} appearance="hint">
            For example, try changing theme to Dark by using eva.dark
          </Text>
          <Button style={styles.likeButton}>LIKE</Button>
        </Layout>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

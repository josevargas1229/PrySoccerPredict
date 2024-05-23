import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import FootballMatchesList from '@/components/FootballMatchesList';
import RotatingBall from '@/components/RotatingBall';

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0CA80D', dark: '#195E19' }}
      headerImage={
        <View style={styles.headerContainer}>
          <View style={styles.rotatingBallContainer}>
            <RotatingBall />
          </View>
        </View>
      }
      >
      <FootballMatchesList/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: '100%', // Ajusta según el tamaño del header que necesites
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative', // Asegúrate de que el contenedor tenga posición relativa
  },
  rotatingBallContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10, // Ajusta el padding según sea necesario
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  date: string;
  league: string;
  probability: number;
  odds: number;
  bettingSite: string;
}

const matches: Match[] = [
  {
    id: "1",
    date: "24 may. 2024 - 14:00",
    league: "LaLiga",
    homeTeam: "Girona",
    awayTeam: "Granada",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/1200px-Girona_FC_Logo.svg.png",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Escudo_Granada_club_de_f%C3%BAtbol.png",
    probability: 83,
    odds: 1.22,
    bettingSite: "betway",
  },
  {
    id: "2",
    date: "25 may. 2024 - 07:00",
    league: "LaLiga",
    homeTeam: "Osasuna",
    awayTeam: "Villarreal",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png",
    awayTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/19.png",
    probability: 50,
    odds: 2.78,
    bettingSite: "1xbet",
  },
  {
    id: "3",
    date: "25 may. 2024 - 11:30",
    league: "LaLiga",
    homeTeam: "Almería",
    awayTeam: "Cádiz",
    homeTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/85.png",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/1200px-C%C3%A1diz_CF_logo.svg.png",
    probability: 38,
    odds: 3.82,
    bettingSite: "1xbet",
  },
  {
    id: "4",
    date: "24 may. 2024 - 14:00",
    league: "LaLiga",
    homeTeam: "Girona",
    awayTeam: "Granada",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/1200px-Girona_FC_Logo.svg.png",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Escudo_Granada_club_de_f%C3%BAtbol.png",
    probability: 83,
    odds: 1.22,
    bettingSite: "betway",
  },
  {
    id: "5",
    date: "25 may. 2024 - 07:00",
    league: "LaLiga",
    homeTeam: "Osasuna",
    awayTeam: "Villarreal",
    homeTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Osasuna_logo.svg/1200px-Osasuna_logo.svg.png",
    awayTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/19.png",
    probability: 50,
    odds: 2.78,
    bettingSite: "1xbet",
  },
  {
    id: "6",
    date: "25 may. 2024 - 11:30",
    league: "LaLiga",
    homeTeam: "Almería",
    awayTeam: "Cádiz",
    homeTeamLogo: "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/85.png",
    awayTeamLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/1200px-C%C3%A1diz_CF_logo.svg.png",
    probability: 38,
    odds: 3.82,
    bettingSite: "1xbet",
  },
];

const FootballMatchesList: React.FC = () => {
  const renderItem = ({ item }: { item: Match }) => (
    <ThemedView style={styles.item}>
      <ThemedText type="default">{item.date}</ThemedText>
      <View style={styles.matchContainer}>
        <View style={styles.teamContainer}>
          <Image source={{ uri: item.homeTeamLogo }} style={styles.logo} />
          <ThemedText type="subtitle">{item.homeTeam}</ThemedText>
        </View>
        <View style={styles.vsContainer}>
          <ThemedText type="default">vs</ThemedText>
        </View>
        <View style={styles.teamContainer}>
          <Image source={{ uri: item.awayTeamLogo }} style={styles.logo} />
          <ThemedText type="subtitle">{item.awayTeam}</ThemedText>
        </View>
      </View>
    </ThemedView>
  );

  return (
    <FlatList
      data={matches}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 2,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 18,
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 8,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  vsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    width:'100%'
  },
});

export default FootballMatchesList;

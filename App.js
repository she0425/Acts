import React from 'react';
// Import essential React Native components for layout, interaction, and styling
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// Import local user profile mock data
import { profileData } from './ProfileData';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  // Destructure profile information from imported data object
  const { name, location, bio, stats } = profileData;

  return (
    //SafeAreaView ensures content stays within safe device boundaries (avoids notches/status bars) 
    <SafeAreaView style={styles.container}> 
    
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.headerCard}>
          <Image
            source={require('./assets/she.jpg')} 
            style={styles.avatar}
          />
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>

  
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statBox}>
              <Text style={styles.statCount}>{stat.count}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bioText}>{bio}</Text>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// StyleSheet defining component layout, shadows, colors, and typography
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8', // Light gray background color
  },
  scrollContent: {
    padding: 20,
  },
  headerCard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2, // Native drop shadow for Android
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45, // Circular image framing
    marginBottom: 12,
    backgroundColor: '#e0e0e0',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  locationText: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row', // Displays statistics horizontally
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 1,
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  bioText: {
    fontSize: 14,
    color: '#4a4a4a',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Places buttons side by side
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#e5e5ea',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: 15,
  },
});
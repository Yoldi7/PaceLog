import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const username = "Tristan"; // luego dinámico con el login

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hola, {username} 👋</Text>
          <Text style={styles.icon}>⚙️</Text>
        </View>

        {/* Botones principales */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>PLAN ENTRENO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DIETA</Text>
        </TouchableOpacity>

        {/* Bloques de información */}
        <ScrollView style={styles.content}>
          <Text style={styles.section}>Resumen de la semana</Text>
          <View style={styles.placeholder} />

          <Text style={styles.section}>Próximas competiciones</Text>
          <View style={styles.placeholder} />

          <Text style={styles.section}>Última actividad</Text>
          <View style={styles.placeholder} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    padding: 20,   // 🔹 márgenes laterales y arriba/abajo
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  greeting: { fontSize: 20, fontWeight: '600' },
  icon: { fontSize: 20 },

  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },

  content: { marginTop: 10 },
  section: { fontSize: 18, fontWeight: '500', marginTop: 20, marginBottom: 10 },
  placeholder: { backgroundColor: '#e0e0e0', height: 80, borderRadius: 8 }
});
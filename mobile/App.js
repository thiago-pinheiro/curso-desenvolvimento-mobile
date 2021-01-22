import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import api from './src/services/api';

export default function App() {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
      api.get('projeto').then(response => {
        console.log(response.data)
        setProjects(response.data)
      })
    }, [])


    async function handleAddProject(){
        const response = await api.post('projeto', {
          title: `New ${Date.now()}`,
          dev: 'Dev test'
        })

        const project = response.data
        setProjects([ ...projects, projects])
    }

  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#0c94ac' />
    <View style={styles.div}>
      <Text style={styles.title}>DevInDev</Text>
      <Text style={styles.description}>Developers In development</Text>
      
      <Text style={styles.titleProjects}>Projetos:</Text>

    <FlatList
      style={styles.projectList}
      data={projects}
      KeyExtractor={(project) => project.id}
      renderItem={({ item: project }) => (
        <Text style={styles.project} key={project.id}>
          {project.title}
        </Text>
      )}

    />

    <TouchableOpacity 
      actionOpacity={0.8}
      style={styles.button} 
      onPress={handleAddProject}
    >
      <Text style={styles.buttonText}>
        Adicionar Projeto
      </Text>
    </TouchableOpacity>

    {/*<View style={styles.projects}>
      <Text style={styles.titleProjects}>Projetos:</Text>
      {projects.map((project) => (
        <Text style={styles.project} key={project.id}>
          {project.title}
        </Text>
      ))}

      </View>8*/}

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#0c94ac',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 60,
    
  }, 
  description: {
    color: '#fff',
    fontSize: 15

  },
  projects: {
    marginTop: 40,
    alignItems: 'center'

  },
  titleProjects: {
    color: '#0c94ac',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,

  },

  project: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
  button: {
    alignSelf: "stretch",
    backgroundColor: '#0c94ac',
    margin: 20,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',

  }

});


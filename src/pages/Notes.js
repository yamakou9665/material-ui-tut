import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Container from "@mui/material/Container";
import NoteCard from "../components/NoteCard"


export default function Notes() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/notes').then((res) => {
      setNotes(res.data)
    })
  }, [])

  const handleDelete = async (id) => {
    await axios.delete('http://localhost:8000/notes/'+id)
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  return (
    <>
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          //Gridは画面を12分割して数値を考えている→md={6}とは画面がミドルサイズのときに画面半分にGridを割り当てるということ
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../react/hooks/useFetch'

export type Repository = {
  full_name: string
  description: string
}

export default function Page() {
  const { data: repositories, isFetching } = useFetch<Repository[]>('/users/pedroaurelli/repos')

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}

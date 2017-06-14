export let styles = {
  item: {
    fontSize: 18,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    fontSize: 18,
    height: 24,
    color: 'white',
    background: '#93ccea',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}


export function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function sortStates(a, b, value) {
  const aLower = a.name.toLowerCase()
  const bLower = b.name.toLowerCase()
  const valueLower = value.toLowerCase()
  const queryPosA = aLower.indexOf(valueLower)
  const queryPosB = bLower.indexOf(valueLower)
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB
  }
  return aLower < bLower ? -1 : 1
}

export function fakeRequest(value, cb) {
  if (value === '')
    return getStates()
  const items = getStates().filter((state) => {
    return matchStateToTerm(state, value)
  })
  setTimeout(() => {
    cb(items)
  }, 500)
}

export function getStates() {
  return [
    { index: 0, name: 'Yazan@gmail.com' },
    { index: 1, name: 'thomas_jong@mail.com' },
    { index: 2, name: 'mdeveloper@gmail.com' }
  ]
}

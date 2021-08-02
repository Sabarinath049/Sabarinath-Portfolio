import React from 'react'

const ModeContext = React.createContext({
  activeMode: false,
  changeMode: () => {},
})

export default ModeContext
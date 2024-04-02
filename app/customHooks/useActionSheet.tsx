import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const useActionSheet = () => {
    const [showActionsheet, setShowActionsheet] = useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
  
  return {
    showActionsheet,
    setShowActionsheet,
    handleClose
  }
}

export default useActionSheet

const styles = StyleSheet.create({})
useEffect(() => {
    updateBonuses();
  }, [updateBonuses]);  // Add 'updateBonuses' to the dependency array
  
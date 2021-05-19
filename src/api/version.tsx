import React, { useState, useEffect } from 'react';
import * as Constants from 'api/constants';
import axios from 'axios';

const uri = 'https://api.github.com/repos/' + Constants.WIN_GITHUB + '/releases';

/**
 * Hook for getting most recent released version of flplus-win
 * 
 * @returns An array with a stateful GHVersion instance at index 0
 */
export const useWinVersion: () => any[] = () => {
  const state = useState(Constants.FALLBACK_VER);
  const [wversion, setWVersion] = state;

  useEffect(() => { 
    axios.get(uri)
      .then(res => {
        if(!Array.isArray(res.data) || res.data.length <= 0) return;

        const wv = res.data[0] as Constants.GHVersion;
        setWVersion({...wv, loading: false});
      })
      .catch(err => {
        console.log(err);
      })
    
    return () => setWVersion(Constants.FALLBACK_VER);
  }, [])

  return [wversion];
}
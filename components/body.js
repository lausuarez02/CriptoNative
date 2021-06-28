import {Text, View} from "react-native";
import React, {useState, useEffect} from "react"


const Body = () => {
     
    const [criptos, setCriptos] = useState([])
    const [search, setSearch] = useState("");
    


  const fetchingData = async() => {
    try{
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      const data = await res.json()


      setCriptos(data)
      console.log(data)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(async() => {
    await fetchingData()
}, [])

const handleChange = e => {
    setSearch(e.target.value);
  };
     
  const filteredCoins = criptos.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const formatPercent = number => `${new Number(number).toFixed(2)}%`

  const formatDollar = (number, maxSignificantDigits) => 
  new Intl.NumberFormat(
    "en-US",
    {
      style:"currency",
      currency:"usd",
      maxSignificantDigits
    }
  ).format(number)
    
    return(
        <View>
     
     <Text>

      
    </Text>
        </View>

    )
}
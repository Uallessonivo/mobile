import React from "react";
// import LogoSvg from "../../assets/logo.svg";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      {/* <LogoSvg /> */}

      <Text style={styles.logoutText}>Sair</Text>
    </View>
  );
}

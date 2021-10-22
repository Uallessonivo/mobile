import React from "react";

import { Image } from "react-native";

import { styles } from "./styles";

import avatarImg from "../../assets/avatar.png";

import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme";

const SIZES = {
  SMALL: {
    containerSizer: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSizer: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = "NORMAL" }: Props) {
  const { containerSizer, avatarSize } = SIZES[sizes];
  return (
    <LinearGradient
      style={[
        styles.container,
        {
          width: containerSizer,
          height: containerSizer,
          borderRadius: containerSizer / 2,
        },
      ]}
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
    >
      <Image
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
        source={{ uri: imageUri || AVATAR_DEFAULT }}
      />
    </LinearGradient>
  );
}

import React from "react";
import { Stack } from "layout/Stack";
import { Text } from "..";

export default {
  title: "Core/Foundations/Typography",
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const BrandFonts = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={300}>
      Inter Light
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={400}>
      Inter Regular
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={500}>
      Inter Medium
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={600}>
      Inter SemiBold
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={700}>
      Inter Bold
    </Text>
  </Stack>
);

export const SystemFonts = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={300}>
      System Light
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={400}>
      System Regular
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={500}>
      System Medium
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={700}>
      System Bold
    </Text>
  </Stack>
);

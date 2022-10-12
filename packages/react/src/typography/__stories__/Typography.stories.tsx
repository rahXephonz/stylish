import React from "react";
import { Stack } from "layout/Stack";
import { Text, HeadingScale, Heading, TextScale } from "..";

export default {
  title: "Core/Foundations/Typography",
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const headingScales: HeadingScale[] = ["2xl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
const textScales: TextScale[] = ["lg", "md", "sm", "xs"];

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

export const HeadingText = () => (
  <Stack spacing="md">
    {headingScales.map(scale => (
      <Stack spacing="sm" padding="md" backgroundColor="grey02">
        <Heading scale={scale}>We are make components for everyone</Heading>
        <Heading as="p" scale="xxs" color="greymed04">
          Heading - {scale}
        </Heading>
      </Stack>
    ))}
  </Stack>
);

export const BodyText = () => (
  <Stack spacing="md">
    {textScales.map(scale => (
      <Stack spacing="sm" padding="md" backgroundColor="grey02">
        <Text display="block" scale={scale}>
          We are make components for everyone
        </Text>
        <Heading as="p" scale="xxs" color="greymed04">
          Body Text - {scale}
        </Heading>
      </Stack>
    ))}
  </Stack>
);

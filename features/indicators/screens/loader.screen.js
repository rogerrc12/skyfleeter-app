import React from "react";
import { Fade, Placeholder, PlaceholderLine } from "rn-placeholder";
import { Container } from "../../../components/utils/container.component";
import { SafeArea } from "../../../components/utils/safe-area.component";

export default function LoaderScreen() {
  return (
    <SafeArea>
      <Container>
        <Placeholder Animation={Fade}>
          <PlaceholderLine width={70} />
          <PlaceholderLine height={170} style={{ borderRadius: 6 }} />
        </Placeholder>
        <Placeholder Animation={Fade}>
          <PlaceholderLine width={70} />
          <PlaceholderLine height={170} style={{ borderRadius: 6 }} />
        </Placeholder>
      </Container>
    </SafeArea>
  );
}

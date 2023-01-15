import { IconeStar, IconeStarTrustPilot } from '@core/assets/svg/icones';
import FlexGroup from '@stitchesUI/ui/FlexGroup';
import IconContainer from '@stitchesUI/ui/IconContainer';
import Text from '@stitchesUI/ui/Text';

export default function TrustPilot() {
  return (
    <FlexGroup gap="10px">
      <FlexGroup>
        {Array.from(Array(5)).map((_, key) => (
          <IconContainer
            key={`svg-${key}`}
            padding="5px"
            colorContainer="$green500"
            radius="5px"
            size="14px"
            colorMedia="$green100"
          >
            <IconeStarTrustPilot className="media" />
          </IconContainer>
        ))}
      </FlexGroup>
      <FlexGroup gap="1px">
        <IconContainer colorMedia="$green500" size="1.125rem">
          <IconeStar className="media" />
        </IconContainer>
        <Text color="gray">Trustpilot</Text>
      </FlexGroup>
    </FlexGroup>
  );
}

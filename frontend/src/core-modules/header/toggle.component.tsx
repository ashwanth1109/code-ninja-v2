import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector, toggle } from '@state/theme.state';
import { colors } from '@assets/design.system';

const Container = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const CentralSphere = styled.div<{ size: string; bg: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: ${(props) => props.bg};
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

const CresentSphereContainer = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
`;

const CresentSphere = styled.div<{ crescent: string; inverseBg: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.inverseBg};
  position: absolute;
  z-index: 5;
  ${(props) => props.crescent};
`;

const SunRay = styled.div<{ ray: string }>`
  ${(props) => props.ray};
  width: 3px;
  height: 8px;
  border-radius: 2px;
  background: ${colors.primary['200']};
  position: absolute;
  z-index: -1;
`;

const Toggle = () => {
  const lightProps = {
    size: '13px',
    bg: colors.primary['200'],
    inverseBg: colors.neutrals.light,
    rays: [
      'top: 15px; transform: rotate(0deg);',
      'top: 19px; right: 19px; transform: rotate(45deg);',
      'right: 16px; transform: rotate(90deg);',
      'bottom: 19px; right: 19px; transform: rotate(-45deg);',
      'bottom: 15px; transform: rotate(0deg);',
      'bottom: 19px; left: 19px; transform: rotate(45deg);',
      'left: 16px; transform: rotate(90deg);',
      'top: 19px; left: 19px; transform: rotate(-45deg);',
    ],
    crescent: 'top: -13px; right: -26px',
  };

  const darkProps = {
    size: '24px',
    bg: colors.neutrals.light,
    inverseBg: colors.neutrals.dark,
    rays: [
      'top: 20px; transform: rotate(0deg);',
      'top: 21px; right: 27px; transform: rotate(45deg);',
      'right: 26px; transform: rotate(90deg);',
      'bottom: 20px; right: 26px; transform: rotate(-45deg);',
      'bottom: 20px; transform: rotate(0deg);',
      'bottom: 20px; left: 26px; transform: rotate(45deg);',
      'left: 26px; transform: rotate(90deg);',
      'top: 20px; left: 26px; transform: rotate(-45deg);',
    ],
    crescent: 'top: -4px; right: -4px',
  };

  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(() => {
    dispatch(toggle());
  }, []);

  const currentProps = theme.isLight ? lightProps : darkProps;

  return (
    <Container onClick={toggleTheme}>
      <CentralSphere size={currentProps.size} bg={currentProps.bg} />
      <CresentSphereContainer className="relative">
        <CresentSphere
          crescent={currentProps.crescent}
          inverseBg={currentProps.inverseBg}
        />
      </CresentSphereContainer>
      {currentProps.rays.map((ray) => (
        <SunRay ray={ray} />
      ))}
    </Container>
  );
};

export default Toggle;

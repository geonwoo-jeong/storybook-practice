/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  /** ボタンの向き */
  direction: 'row' | 'column';
  /** ボタンを右側に表示します。 */
  rightAlign?: boolean;
  /** ボタンとボタンの間の間隔を設定します。 */
  gap: number | string;
  /** ボタングループ内で見せるボタンたち */
  children: React.ReactNode;
  /** スタイルのカスタマイズ用 */
  className?: string;
};

/** 複数の`Button`コンポネントを使った場合やボタンを右側に表示したい場合、`ButtonGroup`コンポネントを使ってください。 */
const ButtonGroup = ({
  direction,
  rightAlign,
  gap,
  children,
  className
}: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '.5rem'
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap
    }
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;

export default ButtonGroup;

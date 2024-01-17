import cx from 'classnames';


type SvgCollectionProps = {
  svgShapes: 'logo'|'visibility'|'unvisibility'|'home'|'account'|'search'|'favorite'|'add'|'close'|'upload'|'github'|'github-white';
  size?: number;
  customStyle?: string;
}


const SvgCollection = ({svgShapes, size=24, customStyle = undefined}: SvgCollectionProps) => {
  return (
    <svg 
      className={cx({
        'fill-black dark:fill-white': svgShapes !== 'logo',
        [`${customStyle}`]: customStyle !== undefined
      })}
      width={size} height={size}>
      <use href={`/sprites/InlineSprite.svg#${svgShapes}`} />
    </svg>
  )
}

export default SvgCollection;
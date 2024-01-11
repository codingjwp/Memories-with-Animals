import cx from 'classnames';


type SvgCollectionProps = {
  svgShapes: 'logo'|'visibility'|'unvisibility'|'home'|'account'|'search'|'favorite'|'add'|'close'|'upload',
  svgFill?: 'white' | 'black',
  size?: number,
}


const SvgCollection = ({svgShapes, svgFill='black', size=24}: SvgCollectionProps) => {
  return (
    <svg className={
        cx({
            'fill-black': svgShapes !== 'logo' && svgFill === 'black',
            'fill-white': svgShapes !== 'logo' &&svgFill === 'white'
          })
      } width={size} height={size}>
      <use href={`/sprites/InlineSprite.svg#${svgShapes}`} />
    </svg>
  )
}

export default SvgCollection;
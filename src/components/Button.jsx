const Button = (
  { 
    action,
    text='',
    width='100%',
    height='100%',
    color='#1E1E1E',
    fontsize='20px',
    background='#FFFFFF',
    borderColor=false,
    uppercase=true,
    radius='40px',
    before='',
    after='',
    padding='20px',
    margin='0 0 0 0',
    hover=true,
  }
) => {
  return (
    <button
      style={{
        backgroundColor: background,
        color: color,
        fontSize: fontsize,
        textTransform: uppercase ? 'uppercase' : 'none',
        width: width,
        height: height,
        border: borderColor ? `1px solid${borderColor}` : 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: (before || after) ? 'center' : 'center',
        alignItems: 'center',
        borderRadius: radius,
        textAlign: 'center',
        padding: padding,
        cursor: 'pointer',
        zIndex: 99,
        margin: margin,
      }}
      className={hover ? 'hover-button' : ''}
      onClick={action}>
      {before}
      {text}
      {after}
    </button>
  );
};

export default Button;

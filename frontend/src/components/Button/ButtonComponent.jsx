import classes from './Button.module.css'


export default function ButtonComponent({ children, isActive, ...props}) {
    // const handleMouseEnter = () => console.log('entered')

    return <button
        { ...props}
        className={isActive ? `${classes.button} ${classes.active}` : classes.button}
        // onDoubleClick={() => 
        //     console.log('dbl')
        // }
        // onMouseEnter={handleMouseEnter}
    >
        {children}</button>
}
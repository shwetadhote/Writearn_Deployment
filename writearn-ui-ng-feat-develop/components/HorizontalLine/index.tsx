import React from 'react'
import { Card } from 'reactstrap';
import styles from './styles.module.css';

const HorizontalLine:React.FC = () => {
  return (
   <>
   <Card className={styles.hr_line}></Card>
   </>
  )
}

export default HorizontalLine
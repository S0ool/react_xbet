// @ts-ignore
import styles from './style.module.css';
import CustomSelect from '../../UI/ListLink';

export const Header = () => {
  const options = [
    { value: '/', label: 'Home' },
    { value: '/cases', label: 'Cases' },
    { value: '/mines', label: 'Mines' },
  ];

  return (
    <>
      <header
          style={{ padding: '20px' }}>
        <CustomSelect options={options} placeholder="Select a page" />
      </header>
    </>
  );
};

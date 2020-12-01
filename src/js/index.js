import '../assets/css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/styles.scss";
import '../assets/css/variables.scss';
import 'animate.css';
import Toast from './modules/Toast/Toast';

const toast = new Toast("body");
toast.show({
  message: 'Testing new file',
  customClass: 'custom',
  position: 'left-top',
});
setTimeout(() => {
  toast.show({
    message: 'SECOND TOAST RUN',
    customClass: 'custom',
    position: 'left-top',
  });
}, 5000);




import { Card, Button, Layout } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

const { Footer } = Layout;

import './footer.scss';

export const FooterPart: React.FC = () => (
    <Footer>
        <Button type='link'>Смотреть отзывы</Button>
        <Card
            title={
                <div>
                    <p>Скачать на телефон</p>
                    <p>Доступно в PRO-тарифе</p>
                </div>
            }
            className='download'
        >
            <Button type='text'>
                <AndroidFilled />
                Android OS
            </Button>
            <Button type='text'>
                <AppleFilled />
                Apple iOS
            </Button>
        </Card>
    </Footer>
);

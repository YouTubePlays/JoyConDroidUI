import React from 'react';
import { withNamespaces } from 'react-i18next';

const blackColor = {
    color: '#000'
};

const grayColor = {
    color: '#888'
};

function Legal(props) {
    const { t } = props;
    return (
        <div>
            <h2><span style={blackColor}>{t('legalAndDisclaimer.appInfoTitle')}</span></h2>
            <p style={grayColor}>{t('legalAndDisclaimer.ai1')}</p>
            <p style={grayColor}>{t('legalAndDisclaimer.ai2')}</p>
            <p style={grayColor}>{t('legalAndDisclaimer.ai3')}</p>
            <p style={grayColor}>
                {t('legalAndDisclaimer.ai4')}
                <ul style={grayColor}>
                    <li style={grayColor}>{t('sony')}</li>
                    <li style={grayColor}>{t('xiaomi')}</li>
                    <li style={grayColor}>{t('lg')}</li>
                    <li style={grayColor}>{t('oneplus')}</li>
                    <li style={grayColor}>{t('huawei')}</li>
                </ul>
            </p>
            <p style={grayColor}>{t('legalAndDisclaimer.ai5')}</p>
            <br />
            <h2><span style={blackColor}>{t('legalAndDisclaimer.disclaimerTitle')}</span></h2>
            <p style={grayColor}>{t('legalAndDisclaimer.d1')}</p>
            <p style={grayColor}>{t('legalAndDisclaimer.d2')}</p>
        </div>
    );
}
export default withNamespaces()(Legal);
import React from 'react';
import { 
    PageHeader,
    Page, 
} from '../../components';

export default props => (
    <div className="page--home">
        <PageHeader title="Bem-Vindo" />
        <Page>
            <p>SimplesVet App em React :)</p>
        </Page>
    </div>
)
import { Resend } from 'resend';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
    console.log('Testing Resend with key:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'fleury.koyo@gmail.com',
            subject: 'Test from DoQshare Assistant',
            html: '<p>If you see this, the API key is working correctly!</p>'
        });

        if (error) {
            console.error('Resend Error:', error);
        } else {
            console.log('Success!', data);
        }
    } catch (err) {
        console.error('Catch Error:', err);
    }
}

test();

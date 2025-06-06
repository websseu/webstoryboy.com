import nodemailer from 'nodemailer'

export async function sendVerificationEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/email?token=${token}`

  const mailOptions = {
    from: `"webstoryboy.com" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '안녕하세요. 웹스토리보이입니다 :). 이메일 인증 부탁드립니다.^^',
    html: `
      <p>안녕하세요. 웹스토리보이입니다.</p>
      <p>아래 링크를 클릭하여 이메일 인증을 완료해주세요!</p>
      <a href="${verificationLink}" target="_blank">클릭!</a>
      <p>감사합니다!</p>
    `,
  }
  try {
    await transporter.sendMail(mailOptions)
    console.log(`인증 이메일이 ${email}로 전송되었습니다.`)
  } catch (error) {
    console.error('이메일 전송 실패:', error)
  }
}

export default function handler({ req, res}: any) {
    res.status(200).json({ name: 'John Doe' })
  }
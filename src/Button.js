export default function Button({children}) {
  return (
    <button style={{
      backgroundColor: "#F4CE14",
      borderRadius: "5px",
      padding: "10px 35px",
      fontFamily: "'Karla', sans-serif",
      fontWeight: 700,
      fontSize: "18px",
      border: "0"
    }}>
      {children}
    </button>
  )
}
const truncateText = (text, wordCount) => {
  const words = text.split(' ')
  const truncatedWords = words.slice(0, wordCount)
  const truncatedText = truncatedWords.join(' ')
  return truncatedText
}

export default truncateText
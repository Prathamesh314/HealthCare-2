import nltk
from nltk.stem.porter import PorterStemmer

stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def stem(words):
    return stemmer.stem(words.lower())


def bag_of_words(tokenized_sentence, all_words):
    pass


sentence = "connects, connections, connecting"
# print(tokenize(sentence))
for word in tokenize(sentence):
    print(stem(word))

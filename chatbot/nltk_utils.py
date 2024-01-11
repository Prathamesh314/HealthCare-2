import nltk
from nltk.stem.porter import PorterStemmer
import numpy as np
stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def stem(words):
    return stemmer.stem(words.lower())


def bag_of_words(tokenized_sentence, all_words):
    tokenized_sentence = [stem(w) for w in tokenized_sentence]
    bag = [0]*len(all_words)
    for word in tokenized_sentence:
        if word in all_words:
            idx = all_words.index(word)
            bag[idx] = 1
    return np.array(bag, dtype=np.float32)


tokenize_sentence = ["hi", "how", "are", "you"]
words = ["hi", "hello", "I", "you", "bye", "thanks", "cool"]
print(bag_of_words(tokenize_sentence, words))

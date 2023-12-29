# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import nltk

nltk.download('punkt')


@csrf_exempt
def ngrams(request):
    if request.method == 'POST':
        data = request.POST
        text1 = data.get('text1', '')
        text2 = data.get('text2', '')

        tokens1 = nltk.word_tokenize(text1)
        tokens2 = nltk.word_tokenize(text2)

        ngrams1 = list(nltk.ngrams(tokens1, 3))
        ngrams2 = list(nltk.ngrams(tokens2, 3))

        common_ngrams = set(ngrams1) & set(ngrams2)

        return JsonResponse({'common_ngrams': list(common_ngrams)})
    else:
        return JsonResponse({'error': 'Invalid request method'})

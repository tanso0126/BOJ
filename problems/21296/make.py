import math
from decimal import Decimal, getcontext

# Set precision for Decimal operations
getcontext().prec = 100

def factorial_log10(n):
    log_sum = Decimal(0)
    for i in range(1, n + 1):
        log_sum += Decimal(math.log10(i))
    return log_sum

def find_minimum_n(MAX):
    epsilon = Decimal('1.5e-14')
    HIGH = [Decimal('inf'), None]  # [smallest error, corresponding N]
    
    for N in range(109000000, MAX + 1):
        log_factorial = factorial_log10(N)
        k_log = log_factorial - Decimal(1)  # log10(N!) - 1
        k = Decimal(10) ** k_log
        
        k_integral = Decimal(k.to_integral_value())
        k_error = abs(k - k_integral)
        
        if Decimal('10') <= k < Decimal('100'):
            if k_error < HIGH[0]:
                HIGH = [k_error, N]
        
        # Output the current best HIGH
        print(f"Current N: {N}, Highest accuracy: k error = {HIGH[0]}, at N = {HIGH[1]}")

        # If k_error is within epsilon, we can break
        if k_error <= epsilon:
            break
    
    return HIGH

# Set MAX value
MAX = 10**14  # Example value, adjust as needed
result = find_minimum_n(MAX)
print(f"The best k error and corresponding N are: {result}")

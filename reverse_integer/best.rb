# Runtime 52 ms, Memory Usage 9.6 mb

def reverse(x)
    i = x < 0 ? -1 : 1
    str = x.to_s
    str.reverse!
    num = i * str.to_i
    num < -2**31 || num > 2**31 - 1 ? 0 : num
end
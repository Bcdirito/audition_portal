# Runtime 52 ms, Memory Usage 9.5 mb

def reverse(x)
    str = x.to_s
    str.reverse!
    num = str.to_i
    if num <= -2 ** 31 || num >= (2**31) - 1
        return 0
    elsif x < 0
        return -num
    else
        return num
    end
end
# Runtime 52 ms, Memory Usage 9.3 mb

def is_perfect_square(num)
    i = 1
    while (i ** 2 <= num)
        if i ** 2 == num
            return true
        else
            i += 1
        end
    end
    return false
end
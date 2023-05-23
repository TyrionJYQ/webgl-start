function initShaders(VERTEX_SHADER_SOURCE, FRAG_SHADER_SOURCE, gl) {
  // 创建着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  // 编译着色器
  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE);
  gl.shaderSource(fragmentShader, FRAG_SHADER_SOURCE);

  // 编译着色器
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // 创建程序
  const program = gl.createProgram();

  // 建立程序和着色器联系
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);

  gl.useProgram(program);
  return program;
}

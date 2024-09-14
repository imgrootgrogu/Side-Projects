function mandelbrot_example

% Get handle to cluster
c = parcluster;

% Run on CPU
c.NumThreads = 8;
cpu_j = c.batch(@calc_mandelbrot,4,{'double'});

% Run on GPU
c.NumThreads = 1;
c.AdditionalProperties.GpusPerNode = 1;
gpu_j = c.batch(@calc_mandelbrot,4,{'gpuArray'});

% Plot results
% Wait for the job to finish running
cpu_j.wait
[cpu_x,cpu_y,cpu_count,cpu_t] = cpu_j.fetchOutputs{:};
figure
subplot(1,2,1)
imagesc(cpu_x,cpu_y,cpu_count)
colormap([jet; flipud(jet); 0 0 0]);
axis off

% Wait for the job to finish running
gpu_j.wait
[gpu_x,gpu_y,gpu_count,gpu_t] = gpu_j.fetchOutputs{:};
subplot(1,2,2)
imagesc(gpu_x,gpu_y,gpu_count)
colormap([jet; flipud(jet); 0 0 0]);
axis off

fprintf('CPU time: %0.2f\n',cpu_t)
fprintf('GPU time: %0.2f\n',gpu_t)

end
